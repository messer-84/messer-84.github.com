import React from 'react';

const AnswerList = (props) =>{
   const {answers, index, updateAnswer, group} = props;
  var fieldId = 0;

   return (
      <ol>
         {answers.map((subItem, subIndex) => {
           fieldId++;

            return <li key={subIndex}>
               <input
                   type="radio"
                   name={index}
                   value={subIndex}
                   id={fieldId}
                   checked={group.checkedAnswer === subIndex}
                   onChange={e => updateAnswer(e)}
               />
               <label htmlFor={fieldId}>{subItem}</label>
              </li>;
         })}
      </ol>
   );
};

export default AnswerList;