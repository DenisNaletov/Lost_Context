// Вариант 1  - метод bind
//
//
let group =
    {
        title: 'Java 19',
        students: ['Gena', 'Andrey', 'Elena', 'Anton'],
        showList: function ()
        {
            const show = function (name)
            {
                console.log(`${this.title}: ${name}`)
            }
            this.students.forEach(show.bind(this))
        }
    }

group.showList()
let newGroup = group
group = null
newGroup.showList()