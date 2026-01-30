App.jsx- 
   1. styled import kara hai from styled-component se . because of giving styling on all the component and buttons .



   2. ek usestate function banaya hai function ke andar because of finding the value of game started . means game start hua ya nahi uske liye ekk usekara.


    3. Return ke andar conditional rendering ka use kiya gaya hai:
   - Agar `isGameStarted` false hai toh `StartGame` component render hoga,
   - Warna `GamePlay` component render hoga.

    a. 

   - `App.js` mein ek function banaya: `toggleGamePlay`.
    - Is function ko `StartGame` component mein prop ke through pass kiya using: `toggle={toggleGamePlay}`.
    - `StartGame` component mein is prop ko curly braces `{}` ke saath destructure karke access kiya: `({ toggle })`.
    - Fir button ke `onClick` event ke andar is function ko call kiya: `onClick={toggle}`.

    **➡️ Ye concept "Passing a function from parent to child via props" kehlata hai.**


    4.  const toggleGamePlay = () => {

    setIsGameStarted((prev)=> !prev);  ye line tab use hota hai jab hamare new state ki value previous one pe depend kare ki
      }
      ye ek arrow function hai 


now in starting or previous gamestart is fale so startgamerender


------------------------------------------------------------------------

startgame.jsx--
    ek containe banaya hai usme image add kari hai and a button usme ek toggle function hai aur styling ke liye 
      container.div use kara hai usme saari css daal di hai


 now onclicking start game gameplay renders


---------------------------------------------------------------------------

gameplay---
    1. isme saari file ko import kara and usestate function ko bhi
    uske baad hamne functional component mai 4 usestate use kare taki  score , selectnumber , currentdice, error in sab ki valu update karsake jab jaroorat ho.

    2. uske baad generaterandomnumber ka ek function banaya hai
    jo random number generate kare aur return kare  

    3. ek roledice ka function banaya jo jisme condition dali ki if selectnumber null ho to ek error ki value null se upadate hokar ek line return kare .
    aur agar aisa nahi hota to seterror null hi ho.

    4. randomnumber ka ek variable banaya jisme generaterandom number store kara 1 se 7 tkk .

    5. currentdice ki value ko upadte kardi random generate number se .

    6. in sab ke baad condition daali ki agar selectednumber == randomgenerated number ke to score prev+random number ke generate se update hojaye.
    else prev-2 se update ho 

    7. agar ek baar number select kardiya to vo select na rah jaye issliye selectednumber ko undefined karna hota hai .
    
    8. after all the things apne component ko render karaya hai 
    aur jha need huyi hai wha parents to child props pass kiye hai like score, selectednumber , setselected number etc.

   in short ----App mai useState se values manage kar rahe hai.
   generateRandomNumber random value deta hai.
  roleDice function pura logic control karta hai – error, dice image, score update.
  Child components ko parent se props bhej rahe hai, jisme score, function aur selectedNumber jaise cheezein hai.
  selectedNumber ko har roll ke baad reset karna zaroori hai.
  Aur setCurrentDice mein wahi number dalna chahiye jo randomNumber hai taaki dice image sahi aaye.

  -------------------------------------------------------------------------







