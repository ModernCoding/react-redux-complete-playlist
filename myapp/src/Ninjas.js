import React from 'react';
import './Ninjas.sass';

const Ninjas = ({ninjas, deleteNinja}) => {

  // const ninjaList = ninjas.map(ninja => {
  //   return (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: { ninja.name }</div>
  //       <div>Age: { ninja.age }</div>
  //       <div>Belt: { ninja.belt }</div>
  //     </div>
  //   )
  // });

  // return (
  //   <div className="ninja-list">
  //     { ninjaList }
  //   </div>
  // );

  return (
    <div className="ninja-list">
      { 
        ninjas
          .filter(ninja => ninja.age > 20)
          .map(ninja => {
          
            return (
              <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                
                <button onClick={() => {deleteNinja(ninja.id)}}>
                  Delete ninja
                </button>
              </div>
            );

          })
      }
    </div>
  );

}

export default Ninjas;