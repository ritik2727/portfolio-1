import React from "react";
import { motion } from 'framer-motion'
const ProgressBar = (props) => {
   const { bgcolor, completed, name } = props;

   const containerStyles = {
      height: 28,
      width: '100%',
      backgroundColor: "grey",
      borderRadius: 50,
      marginTop: 50
   }

   const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
   }

   const labelStyles = {
      padding: 15,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Ubuntu'
   }

   return (
      <motion.div style={containerStyles}>
         <div style={fillerStyles}>
            <span style={labelStyles}>{`${name}`}</span>
         </div>
      </motion.div>
   );
};

export default ProgressBar;