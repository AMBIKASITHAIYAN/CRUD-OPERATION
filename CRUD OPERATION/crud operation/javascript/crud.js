var users=[]
        function display(){
            var userlist=document.getElementById("user-list")
            userlist.innerHTML=""
            users.forEach(user=>{
                var row =document.createElement('tr')
               row.innerHTML=`<td>${user.id}</td><td>${user.name}</td><td>${user.age}</td>
               <td>
                <button onclick=updaterow(${user.id})>Upadate</button><button onclick=deleterow(${user.id})>Delete</button></td>`
                userlist.appendChild(row)

            })
        }
        var create=document.getElementById("createbtn")
       
        create.addEventListener("click",function(){
           var name= document.getElementById("name").value
           var age= document.getElementById("age").value
           if(name&&age){
            var newuser={
                id:Date.now(),
                name:name,
                age:age,
            }
            users.push(newuser)
            display()
            clearcreateform()
           
           }
           else{
            alert("Enter your name")
           }
        })
        
        
        var update=document.getElementById("updatebtn")
        update.addEventListener("click",function(){
            var id=document.getElementById("update-id").value
            var name=document.getElementById("update-name").value
            var age=document.getElementById("update-age").value
            var userIndex=users.findIndex(user=>user.id==id)
            if(userIndex==-1){
                alert("user not found")
                
            }
            if(name&&age){
                users[userIndex].name=name
                users[userIndex].age=age
                display()
                clearupdateform()
            }
            else{
                 alert("enter the values")
            }
        })

        function updaterow(id){
           
        
            var user=users.find(user=>user.id==id)
            if(user){
                document.getElementById("update-id").value = user.id;
        document.getElementById("update-name").value = user.name;
        document.getElementById("update-age").value = user.age;
                
            }
            else{
                alert("id dosen't enter the value")
            }
            
        }
        function deleterow(id){
            users=users.filter(user=>user.id!==id)
            display()

        }
        function clearcreateform() {
            document.getElementById("name").value = '';
            document.getElementById("age").value = '';
        }
        function clearupdateform() {
            document.getElementById("update-id").value = '';
            document.getElementById("update-name").value = '';
            document.getElementById("update-age").value = '';
        }
    