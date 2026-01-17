import type { FC } from 'react'
import ItemTrackerButton from './components/ItemTrackerButton'

import styles from './styles.module.css'

const ItemTracker: FC = () => {
  return (
    <div className={styles.container} onContextMenu={(e) => e.preventDefault()}>
      <div className={styles.row}>
        <ItemTrackerButton
          item="bow"
          progressiveMaxLeft={1}
          progressiveMaxRight={2}
        />
        <ItemTrackerButton
          item="boomerang"
          progressiveMaxLeft={1}
          progressiveMaxRight={1}
        />
        <ItemTrackerButton item="hookshot" />
        <ItemTrackerButton item="bombs" />
        <ItemTrackerButton item="powder" />
        <ItemTrackerButton item="mushroom" />
        <ItemTrackerButton item="boots" />
        <ItemTrackerButton item="sword" progressiveMaxLeft={4} />
      </div>
      <div className={styles.row}>
        <ItemTrackerButton item="fire_rod" />
        <ItemTrackerButton item="ice_rod" />
        <ItemTrackerButton item="flames" />
        <ItemTrackerButton item="ether" />
        <ItemTrackerButton item="quake" />
        <ItemTrackerButton item="magic_half" />
        <ItemTrackerButton item="gloves" progressiveMaxLeft={2} />
        <ItemTrackerButton item="shield" progressiveMaxLeft={3} />
      </div>
      <div className={styles.row}>
        <ItemTrackerButton item="lamp" />
        <ItemTrackerButton item="hammer" />
        <ItemTrackerButton item="flute" />
        <ItemTrackerButton item="net" />
        <ItemTrackerButton item="mudora" />
        <ItemTrackerButton item="shovel" />
        <ItemTrackerButton item="flippers" />
        <ItemTrackerButton item="tunic" progressiveMaxLeft={3} />
      </div>
      <div className={styles.row}>
        <ItemTrackerButton item="bottle" />
        <ItemTrackerButton item="somaria" />
        <ItemTrackerButton item="byrna" />
        <ItemTrackerButton item="cape" />
        <ItemTrackerButton item="mirror" />
        <ItemTrackerButton
          item="agahnim"
          progressiveMaxLeft={1}
          progressiveMaxRight={1}
        />
        <ItemTrackerButton item="moon_pearl" />
        <ItemTrackerButton item="go_mode" />
      </div>
    </div>
  )
}

export default ItemTracker
