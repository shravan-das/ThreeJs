import React from 'react'
import {motion,AnimatePresence, color} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '../store'
import { CustomButton } from '../Components'
import {headContainerAnimation,headContentAnimation,headTextAnimation,slideAnimation} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
            <h1 className="head-text">
              <span style={{ color: 'orange' }}>MAKE IT</span>
             <br className="xl:block hidden" />
              <span style={{ color: 'black' }}>HAPPEN.</span>
            </h1>

            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with this 3D customization tool. <strong>Unleash your creativity</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home