import type { FC } from 'react'
import { useCallback, useState } from 'react'

import styles from './styles.module.css'
import classNames from 'classnames/bind'
import type { ItemType } from '../../../../model/ItemType'

interface Props {
  item: ItemType
  progressiveMaxLeft?: number
  progressiveMaxRight?: number
}

const cx = classNames.bind(styles)

const ItemTrackerButton: FC<Props> = ({
  item,
  progressiveMaxLeft,
  progressiveMaxRight,
}) => {
  const [progressiveValueLeft, setProgressiveValueLeft] = useState(0)
  const [progressiveValueRight, setProgressiveValueRight] = useState(0)

  let leftIconPath = `${item}.png`
  let rightIconPath = null

  if (progressiveMaxRight !== undefined) {
    let level = progressiveValueRight
    if (progressiveValueRight == 0) {
      level = 1
    }
    rightIconPath = `${item}-right-${level}.png`
  }

  if (progressiveMaxLeft !== undefined) {
    let level = progressiveValueLeft
    if (progressiveValueLeft == 0) {
      level = 1
    }

    if (progressiveMaxRight !== undefined) {
      leftIconPath = `${item}-left-${level}.png`
    } else {
      leftIconPath = `${item}-${level}.png`
    }
  }

  const handleClick = useCallback(() => {
    if (progressiveMaxLeft !== undefined) {
      if (progressiveMaxRight !== undefined) {
        // Item button has a progressive and cycling right click feature (like arrows or boomerang)
        let value = progressiveValueLeft + 1
        if (value > progressiveMaxLeft) {
          value = 0
        }
        setProgressiveValueLeft(value)
      } else {
        // Item button has degressive right click feature (like sword, tunic...)
        let value = progressiveValueLeft
        if (value < progressiveMaxLeft) {
          value++
        }
        setProgressiveValueLeft(value)
      }
    } else {
      let value = progressiveValueLeft + 1
      if (value > 1) {
        value = 0
      }
      setProgressiveValueLeft(value)
    }
  }, [progressiveValueLeft, progressiveMaxLeft, progressiveMaxRight])

  const handleRightClick = useCallback(() => {
    if (progressiveMaxRight !== undefined) {
      // Item button has a progressive and cycling right click feature (like arrows or boomerang)
      if (progressiveMaxRight !== undefined) {
        let value = progressiveValueRight + 1
        if (value > progressiveMaxRight) {
          value = 0
        }
        setProgressiveValueRight(value)
      }
    } else {
      // Item button has degressive right click feature (like sword, tunic...)
      if (progressiveMaxLeft !== undefined && progressiveValueLeft > 0) {
        setProgressiveValueLeft(progressiveValueLeft - 1)
      }
    }
  }, [
    progressiveValueLeft,
    progressiveMaxLeft,
    progressiveValueRight,
    progressiveMaxRight,
  ])

  const leftClasses = cx({
    image: true,
    disabled: progressiveValueLeft === 0,
  })
  const rightClasses = cx({
    image: true,
    disabled: progressiveValueRight === 0,
  })

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      <img className={leftClasses} src={`images/items/${leftIconPath}`} />
      {rightIconPath && (
        <img className={rightClasses} src={`images/items/${rightIconPath}`} />
      )}
    </div>
  )
}

export default ItemTrackerButton
