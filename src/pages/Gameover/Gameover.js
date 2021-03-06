import React from 'react'
import classes from './Gameover.module.scss'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { fetchImages } from '../../redux/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setTimerEndAction,
  setDataFetchedAction,
} from '../../redux/actionCreators'

export const Gameover = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTimerEndAction(false))
    dispatch(setDataFetchedAction(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className={classes.gameover}>
        <h1>GAME OVER!</h1>
        <Link to="/game">
          <Button className={classes.gamoverBtn} onClick={fetchImages}>
            TRY AGAIN
          </Button>
        </Link>
        <Link to="/">
          <Button className={classes.gamoverBtn}>HOME</Button>
        </Link>
      </div>
    </>
  )
}
