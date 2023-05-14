const n = ["aniket", "shrirang", "shantanu", "vishal", "kishore", "indrajit", "sanket"];
const v2 = [12, 13,14,115,16,17,28];

let j = 0;
for(let i in n){
        const info = {
        [n[i]]   : v2[j]
        }
        j++;
        console.log(info)
    
}