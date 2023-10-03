import React from 'react';
//import { SetPionts } from './PointsState';

export function PasswordStrengthIndicator({ password }) {

    const calculateStrength = (password) => {

        let SetofUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let SetofLowwercase = 'abcdefghijklmnopqrstuvwxyz'
        let SetofNumber = '0123456789'
        let SetofSpecail = ''

        let NumofPassword = 0;
        let CountUppercase = 0;
        let CountLowwercase = 0;
        let CountNumber = 0;
        let CountSpecial = 0;

        var Points = 0; 

        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if (char >= 'a' && char <= 'z') {
              CountLowwercase += 1;
            }else if(char >= 'A' && char <= 'Z'){
              CountUppercase += 1;
            } else if (char >= '0' && char <= '9') {
              CountNumber += 1;
            } else{
              CountSpecial += 1;
            }
          }

          function SetPionts(U,L,N,S,inputString){
            //Good
            Points += (inputString.length*4);
          
            if(U != 0){
              Points += ((inputString.length-U)*2);
            }
            if(L != 0){
              Points += ((inputString.length-L)*2);
            }
          
            if(N != inputString.length){
              Points += (N*4);
            }
            if(S != inputString.length){
              Points += (S*6);
            }
          
            //Bad
            //char only or number only
            if(U == inputString.length || L == inputString.length){
              Points -= inputString.length;
            }else if(N == inputString.length){
              Points -= inputString.length;
              
            }
          
            //repeat type
            if(U > 1){
              U -=1 ;
              Points -= U*2;
            }
            if(L > 1) {
              L -=1;
              Points -= L*2;
            }
            if(N > 1) {
              N -=1;
              Points -= N*2;
            }
            if(S > 1) {
              S -=1;
              Points -= S*2;
            }
          
            console.log("TAN"+Points);
            return Points;
          }
          // console.log(CountLowwercase);
          // console.log(CountUppercase);
          // console.log(CountNumber);
          // console.log(CountSpecial);
          const n = SetPionts(CountUppercase,CountLowwercase,CountNumber,CountSpecial,password);
          console.log(n);
          return n;


      };

  const strength = calculateStrength(password);
  console.log("st="+strength);

  const getColor = (strength) => {
    if (strength < 30) {
      return 'red';
    } else if (strength < 50) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  const color = getColor(strength);

  return (
    <div
      style={{
        width: `${Math.min(100, strength)}%`, // Percentage-based width
        height: '25px',
        backgroundColor: color,
        borderRadius: '4px',
        transition: 'width 0.3s', // Smooth transition when the width changes
      }}
    >
      <div style={{ textAlign: 'center', color: 'white' }}></div>
    </div>
  );
}

//export default PasswordStrengthIndicator;
