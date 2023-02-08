// 4 вариант не заработал как надо для null

let group =
    {
        title: 'Java 19',
        students: ['Gena', 'Andrey', 'Elena', 'Anton'],
        showList: function ()
        {
            const show = function (name)
            {
                console.log(`${group.title}: ${name}`)
            }
            this.students.forEach(show)
        }
    }

group.showList()
let newGroup = group
group = null
newGroup.showList()