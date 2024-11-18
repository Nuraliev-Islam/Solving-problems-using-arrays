let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let func = (arr)=>{
    return arr.map((item)=>{
        item.admin = false;
        if (item.id == 3) {
            item.admin = true
        } else {
            console.log('error');
        }
        return arr
    })
}

console.log(func(users));
