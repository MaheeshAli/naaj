import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { getGoals } from '../views/apps/Tast/goalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SecondPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(useSelector((state) => (state.authReducer.user)))
  const { user } = useSelector((state) => (state.authReducer.user !== null ? state.authReducer.user : ''))

  const { goal, isError, message } = useSelector(
    (state) => state.goal
  )
  useEffect(() => {
  
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())
  }, [user, navigate, isError, message, dispatch])
  console.log(goal)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Awesome 🙌</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is your second page.</CardText>
        <CardText>
          Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes.
          Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
        </CardText>
      </CardBody>
    </Card>
  )
}

export default SecondPage
