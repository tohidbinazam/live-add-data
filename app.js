const p_form = document.getElementById('p_form');
const p_list = document.querySelector('.p_list');
const icon = document.querySelector('.card-body i');


p_form.addEventListener('submit', function(e){
    e.preventDefault();

    const P_namae = this.querySelector('input[name="p_name"]').value;
    const P_rag = this.querySelector('input[name="main_pri"]').value;
    const P_sel = this.querySelector('input[name="sale_price"]').value;
    const P_link = this.querySelector('input[name="P-link"]').value;

    let all_data;

    let stroge = localStorage.getItem('product');

    if(stroge){
        all_data = JSON.parse(stroge);
    }else{
        all_data = [];
    }

    all_data.push({
            name  : P_namae,
            price : P_rag,
            ssle  : P_sel,
            link  : P_link
    });

    let stnd_data = JSON.stringify(all_data);

    localStorage.setItem('product', stnd_data);
 
    product_list();

})

product_list();
function product_list(){

    let get_all = localStorage.getItem('product');
    let final_data = JSON.parse(get_all);


    p_list.innerHTML = '';

    final_data.map((data) =>{
        p_list.innerHTML += `
        <div class="col-xl-3 mb-3">
            <div class="card">
                <img class="card-img" src="${data.link}">
                <div class="card-body">
                    <h3>${data.name}</h3>
                    <h5>${data.price}</h3>
                    <h4 class="text-danger">${data.ssle}</h4>
                    <i class="far fa-heart"></i>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        `
    })

}

    
const dev_form = document.getElementById('dev_data');
const all_devs = document.querySelector('.all_devs')



dev_form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const location = document.querySelector('select[name="location"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pic = document.querySelector('input[name="P_url"]').value;
    const skills = document.querySelectorAll('input[name="skills"]:checked');

    
    let all_skills = [];
    skills.forEach(data => {
        all_skills.push(data.value);
    });

    let all_data;

    if (getdata('devs')) {
        all_data = getdata('devs');
    }else{
        all_data = [];
    }

    all_data.push({
        names : name,
        age : age,
        location : location,
        gender : gender,
        pic : pic,
        skills : all_skills
    })


    senddata('devs', all_data);

    dev_list();
})


dev_list();

function dev_list(){
    let getdatas = getdata('devs');

    all_devs.innerHTML = '';

    getdatas.map((data) => {

        let fin_skill = '';
        data.skills.map((d) => {
            fin_skill += `<li class="list-group-item">${d}</li>`
        })

        all_devs.innerHTML += `
          <div class="col-xl-3 my-4">
              <div class="card">
                  <img style="object-fit: cover;" class="card-img" src="${data.pic}" alt="Dev_img">
                  <div class="card-body">
                      <h4>${data.names}</h4>
                      <h4>${data.age}</h4>
                      <h4>${data.location}</h4>
                      <h4>${data.gender}</h4>
                      <ul class="list-group">
                          ${fin_skill}
                      </ul>        
                  </div>
              </div>
          </div>
        `
    })
}