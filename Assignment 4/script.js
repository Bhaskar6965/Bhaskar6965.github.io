var names= new Array();
names[0]="Omkar";
names[1]="Bhaskar";
names[2]="Johny";
names[3]="Bunny";
names[4]="Jason";
names[5]="Jaya Vardhan";
names[6]="Afridi";
names[7]="Balaji";
names[8]="Daniel";
names[9]="Jenny";

for( i=0;i<names.length;i++){
 	if(names[i].charAt(0)=="J"||names[i].charAt(0)=="j"){
		console.log("GoodBye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}