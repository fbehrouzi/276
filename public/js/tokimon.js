var submit_button = document.getElementById('submit');
submit_button.onclick = function submit_tokemon() {
    var weight = document.getElementById('toke_weight').value;
    var height = document.getElementById('toke_height').value;
    var fly = document.getElementById('toke_fly').value;
    var fight = document.getElementById('toke_fight').value;
    var fire = document.getElementById('toke_fire').value;
    var water = document.getElementById('toke_water').value;
    var electric = document.getElementById('toke_electric').value;
    var frozen = document.getElementById('toke_frozen').value;
    var total = document.getElementById('toke_total').value;
    var trainer_name = document.getElementById('toke_trainer_name').value;
    var toke_name = document.getElementById('toke_name').value;
    var the_result = document.getElementById('final_result');
    the_result.innerHTML = 25;
    // tokimon_pool.query(`INSERT INTO tokimon_table VALUES (toke_name, toke_weight, toke_height, toke_fly, toke_fight, toke_fire, toke_water, toke_electric, toke_frozen, toke_total, toke_trainer_name)`, (err,res)=>{
    //   console.log(err,res)
    //   tokimon_pool.end()
    });
 }
 // <% var submit_button = document.getElementById('submit');%>
 // <% submit_button.onclick = function submit_tokemon() { %>
 //   <% var weight = document.getElementById('toke_weight').value;%>
 //   <% var height = document.getElementById('toke_height').value;%>
 //   <% var fly = document.getElementById('toke_fly').value;%>
 //   <% var fight = document.getElementById('toke_fight').value;%>
 //   <% var fire = document.getElementById('toke_fire').value;%>
 //   <% var water = document.getElementById('toke_water').value;%>
 //   <% var electric = document.getElementById('toke_electric').value;%>
 //   <% var frozen = document.getElementById('toke_frozen').value;%>
 //   <% var total = document.getElementById('toke_total').value;%>
 //   <% var trainer_name = document.getElementById('toke_trainer_name').value;%>
 //   <% var toke_name = document.getElementById('toke_name').value;%>
 //   <% `INSERT INTO tokimon_table VALUES (toke_name, toke_weight, toke_height, toke_fly, toke_fight, toke_fire, toke_water, toke_electric, toke_frozen, toke_total, toke_trainer_name)`;%>
 // <%}%>




 // what i inserted into ejs for a bit 
 // <script>
 //   var tokimon_pool = new Pool({
 //     user: 'postgres',
 //     host: 'localhost',
 //     database: 'tokimon_table',
 //     password: 'darth9410',
 //     port: 5432
 //   });
 // function submit_tokemon() {
 //     var weight = document.getElementById('toke_weight').value;
 //     var height = document.getElementById('toke_height').value;
 //     var fly = document.getElementById('toke_fly').value;
 //     var fight = document.getElementById('toke_fight').value;
 //     var fire = document.getElementById('toke_fire').value;
 //     var water = document.getElementById('toke_water').value;
 //     var electric = document.getElementById('toke_electric').value;
 //     var frozen = document.getElementById('toke_frozen').value;
 //     var total = document.getElementById('toke_total').value;
 //     var trainer_name = document.getElementById('toke_trainer_name').value;
 //     var toke_name = document.getElementById('toke_name').value;
 //     var the_result = document.getElementById('final_result');
 //     the_result.innerHTML = 25;
 //     tokimon_pool.query(`INSERT INTO tokimon_table VALUES (toke_name, toke_weight, toke_height, toke_fly, toke_fight, toke_fire, toke_water, toke_electric, toke_frozen, toke_total, toke_trainer_name)`, (err,res)=>{
 //       console.log(err,res)
 //       tokimon_pool.end()
 //     });
 //  }
 //     </script>
