import React from 'react';

const AnswerList = (props) =>{
   const {answers} = props;
   return (
      <ol>
         {answers.map((subItem, subIndex) => {
            return <li key={subIndex}>{subItem}</li>;
         })}
      </ol>
   );
};

export default AnswerList;