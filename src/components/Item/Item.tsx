import { Card, CardContent, CardMedia, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useCallback, useState } from 'react'

import type { ItemType } from '@customTypes/Item'

const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    width: 600,
    aspectRatio: '1',
    maxWidth: '90%',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    outline: 'none',
  },
  cardMedia: {
    cursor: 'pointer',
  },
})

const Item = ({ id, title, url, thumbnailUrl }: ItemType): JSX.Element => {
  const classes = useStyles()
  const [isMediaModalOpen, setisMediaModalOpen] = useState(false)

  const handleMediaClick = useCallback(() => {
    setisMediaModalOpen(true)
  }, [setisMediaModalOpen])

  const handleMediaModalClose = useCallback(() => {
    setisMediaModalOpen(false)
  }, [setisMediaModalOpen])

  return (
    <>
      <Card style={{ maxWidth: 345 }}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          height="150"
          image={thumbnailUrl}
          alt={title}
          onClick={handleMediaClick}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={isMediaModalOpen}
        onClose={handleMediaModalClose}
        aria-labelledby={`media-modal-${id}`}
        aria-describedby={`media-modal-${title}`}
        style={{ borderWidth: 0 }}
      >
        <div className={classes.modal} tabIndex={-1}>
          <img src={url} height="100%" width="100%" />
        </div>
      </Modal>
    </>
  )
}

export default Item
