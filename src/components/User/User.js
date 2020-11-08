import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../redux/Actions'
import styled from 'styled-components'
import {Button} from '../Search/Search'

const StyledCard = styled.div`
    min-width: 300px;
    margin-bottom: 20px;
    border: 1px solid red;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(255, 0, 0, 0.9ths );
    font-weight: normal;
    font-style: normal;
    color: red;
    padding: 16px;
    width: fit-content;

    h3 {
        margin: 0;
    }

    &:hover {
        box-shadow: 0 6px 10px 0 rgba(255, 0, 0, 0.9);
    }
`

const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

const Info = styled.div`
    display:flex;
    flex-direction: column;
    align-items: baseline;

`

const CardButton= styled(Button)`
    margin-left: auto;
`


export function UserComponent(props) {
    return (
        <StyledCard>
            <Row>
                <Info>
                    <div>{props.name}</div>
                    <div>Height: {props.height}</div>
                    <div>Gender: {props.gender}</div>
                </Info>
                <CardButton onClick={() => props.deleteUser(props.name)}>
                    Eliminar
                </CardButton>

            </Row>
        </StyledCard>
    )
}




const mapStateToProps = (state) => ({
  })

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteUser: (name) => {
        dispatch(deleteUser(name))
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(UserComponent)
export default (Container)

