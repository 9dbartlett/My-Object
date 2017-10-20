function PremierLeague(c,p,t,s){
this.club=c;
this.points=p;
this.position=t;
this.shots=s;

this.averageGoals=function(){
    console.log("we have"+this.shots+"shots on target")
    return this.shots*(6);
    };
}
function main(){
    let team= PremierLeague('Arsenal',15,5,13);
    console.log(team.averageGoals);
}
main()
