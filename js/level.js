class level{
 constructor(time,speed,number,theme,s1,s2,s3,s4,s5) {
   this._time=time
   this._speed=speed
   this._number=number
   this._theme=theme
   this._generateEnemySpeed=s1
   this._moveEnemySpeed=s2
   this._generateScore=s3
   this._generateBonusTime=s5
   this._slowTime=s4
 }
  set generateBonusTime(generateBonusTime)
  {
    this._generateBonusTime=generateBonusTime
  }
   set slowTime(s4)
   {
     this._slowTime=s4
   }

   get slowTime()
   {
     return this._slowTime
   }

   set generateEnemySpeed(s1)
   {
     this._generateEnemySpeed=s1

   }
   get generateEnemySpeed()
   {
     return this._generateEnemySpeed
   }
   set moveEnemySpeed(s2)
   {
     this._moveEnemySpeed=s2
   }
   get moveEnemySpeed()
   {
     return this._moveEnemySpeed
   }
   set generateScore(s3)
   {
     this._generateScore=s3
  }
   get generateScore()
   {
     return this._generateScore
   }
   get generateBonusTime()
   {
     return this._generateBonusTime
   }
   set speed(s){
   this._speed=s
 }
   set time(t){
   this._time=t
 }
  set number(n){
   this._number=n
 }
  set theme(n){
   this._theme=n
 }
 get speed()
 {
   return this._speed
 }
 get time()
 {
   return this._time
 }
 get number()
 {
   return this._number
 }
 get theme()
 {
   return this._theme
 }
}
