    
const mobiles = [
    {"image":"https://i.ibb.co/cLV4RvX/google-pixel-3.jpg","RAM":["8 GB"],"ROM":["256 GB","128 GB","64 GB"],"name":"Pixel 3","brand":"Google","colors":["Blue","Black","White"]},
    {"image":"https://i.ibb.co/160YSpk/mi-redmi-5.jpg","RAM":["6 GB","4 GB"],"ROM":["128 GB","64 GB"],"name":"Redmi 5","brand":"Xiaomi","colors":["Red","Gold","Black","White"]},
    {"image":"https://i.ibb.co/y6dk6n1/mi-redmi-y2.jpg","RAM":["3 GB"],"ROM":["32 GB"],"name":"Redmi Y2","brand":"Xiaomi","colors":["Rose Gold","Gold","Black","White"]},
    {"image":"https://i.ibb.co/McQMDF8/motorola-moto-e5-plus.jpg","RAM":["6 GB"],"ROM":["128 GB","64 GB"],"name":"Moto E5 Plus","brand":"Motorola","colors":["Grey","Black","Pink"]},
    {"image":"https://i.ibb.co/1QGFW28/nokia-6-1.jpg","RAM":["6 GB"],"ROM":["128 GB"],"name":"6.1","brand":"Nokia","colors":["Grey","Black","Blue"]},
    {"image":"https://i.ibb.co/vJbK6qM/realme-c1.jpg","RAM":["6 GB","4 GB","3 GB"],"ROM":["128 GB","64 GB"],"name":"C1","brand":"Realme","colors":["Red","Gold","Black","White","Grey"]},{"image":"https://i.ibb.co/F6c80H6/realme-x.jpg","RAM":["4 GB","3 GB"],"ROM":["64GB","32 GB"],"name":"X","brand":"Realme","colors":["Rose Gold","Gold","Black","White","Pink"]},
    {"image":"https://i.ibb.co/TWLNRyW/samsung-galaxy-s10-plus.jpg","RAM":["6 GB","4 GB"],"ROM":["64 GB"],"name":"Galaxy S10","brand":"Samsung","colors":["Red","Gold","White"]},
    {"image":"https://i.ibb.co/ScZsMtW/vivo-z1-pro.jpg","RAM":["8 GB","6 GB"],"ROM":["128 GB","64 GB"],"name":"Z1 Pro","brand":"Vivo","colors":["White","Deep Blue"]}]
    const ramOptions = ["8 GB","6 GB","4 GB","3 GB","2 GB"];
    const romOptions = ["256 GB","128 GB","64 GB","32 GB","16 GB"];
    const colors = ["Rose Gold","Gold","Black","Grey","White","Red","Pink","Blue","Deep Blue"];
    const brands = ["Google","Samsung","Oppo","Nokia","Xiaomi","Realme","Apple"];
    let carts = [];
        let editIndex = -1;
        let myproduct = {};
        let errors = {};
    
      show();
      function show(active=0){
        let str = makeNavBar(active);
        active === 1 ? str+= showProductsTable() : str+= '';
        active === 2 ? str+= showForm() : str+= '';
        active === 3 ? str+= showCart() : str+= '';
        document.getElementById('show').innerHTML = str;
      }
    
      function showProducts(){
        editIndex = -1;
        myproduct = {};
        show(1);
      }
      function addProductForm(){
        show(2)
      }
    
      function addCart(){
        show(3);
      }
    
      
      function submitProduct(){
        let proName = document.getElementById('proName').value;
        let image = document.getElementById('imgs').value;
        let brand = document.getElementById('brand').value;
        let s1 = document.getElementsByName('s1');
        let cbx = [];
        for(let i=0; i<s1.length; i++){
          if(s1[i].checked){
            cbx.push(s1[i].value);
          }
        }
        let s2 = document.getElementsByName('s2');
        let cbx2 = [];
        for(let i=0; i<s2.length; i++){
          if(s2[i].checked){
            cbx2.push(s2[i].value);
          }
        }
        let s3 = document.getElementsByName('s3');
        let cbx3 = [];
        for(let i=0; i<s3.length; i++){
          if(s3[i].checked){
            cbx3.push(s3[i].value);
          }
        }
         let pr = {image:image,RAM:cbx,ROM:cbx2,name:proName,brand:brand,colors:cbx3};
       
         if(pr.image=='' || pr.RAM=='' || pr.ROM=='' || cbx3.length < 2  || pr.name=='' || pr.brand=='' || pr.colors==''){
          document.getElementById('st').innerHTML = pr.image=='' ? 'Image url is mandatory':'';
          document.getElementById('st1').innerHTML =  pr.RAM=='' ? 'Choose atleast one RAM' :'';
          document.getElementById('st2').innerHTML = pr.ROM=='' ? 'Choose atleast one ROM':'';
          document.getElementById('st6').innerHTML =  pr.name=='' ? 'Name is mandatory':'';
          document.getElementById('st4').innerHTML =  cbx3.length < 2  ? 'Choose atleast Two Color':'';
          document.getElementById('st5').innerHTML = pr.brand=='' ? 'Select brand':'';
          return false;
        }
    
        if((pr)){
          editIndex >=0 ? mobiles[editIndex]=pr : mobiles.push(pr);
          showProducts();
        } else{
            myproduct = pr;
            addProductForm();
        }
      
      }
    
    function editFn(index){
        editIndex = index;
        myproduct = mobiles[index];
        addProductForm();
    }
      
      function makeNavBar(active=0){
        let str = '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
        str += '<a class="navbar-brand" href="#">MobileStore</a>';
        str += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">';
        str += '<span class="navbar-toggler-icon"></span>';
        str += '</button>';
        str += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
        str += '<ul class="navbar-nav mr-auto">';
        let active1 = active === 1 ? 'active' : '';
        let active2 = active === 2 ? 'active' : '';
        let active3 = active === 3 ? 'active' : '';
        str += '<li class="nav-item '+active1+'">'; 
        str += '<a class="nav-link" onclick="showProducts()">Mobile</a>';
        str += '</li>';
        str += '<li class="nav-item '+active2+'">';
        str += '<a class="nav-link" onclick="addProductForm()">Add a Mobile</a>';
        str += '</li>';
        str += '<li class="nav-item '+active3+'">';
        str += '<a class="nav-link" onclick="addCart()">Cart</a>';
        str += '</li>';
        str += '</ul>';
        str += '</div>';
        str += '</nav>';
        return str;
      }
    
      function showProductsTable(){
        const arr = mobiles.map((pr,ind)=>{
          let {image,RAM,ROM,name,brand,colors} = pr;
          let str = '<div class="card col-6 mr-2">';
            str += '<div class="row" onclick="helo('+ind+')">';
            str += '<div class="col-1"></div>';
            str += '<div class="col-4">';
            str += '<img class="w-50" src="'+ image +'">';
            str += '</div>';  
            str += '<div class="col-6 text-center">';
              str += '<span>Name : '+name+'</span><br>';
              str += '<span>Brand : '+brand+'</span><br>';
              str += '<span>Colors : '+colors+'</span><br>';
              str += '<span>RAM : '+RAM+'</span><br>';
              str += '<span>ROM : '+ROM+'</span><br>';
              str += '</div>';
            str += '</div>';
            str += '</div>'; 
        return str;
        });
        let str = '<div class="card float-right col-6" id="sts">';
          str += '</div>';
        return str+arr.join('');
      }
    
      function helo(ind){
         let fnd = mobiles[ind];
          let str ='<div class="text-center">';
            str += '<img src="'+ fnd.image +'">';
            str += '<h4 class="mt-2">'+fnd.name+' from '+fnd.brand+'</h4>';
            str +=  '<div class="row ml-5">'+makeDropDawn('ram',fnd.RAM,'Select RAM')+makeDropDawn('rom',fnd.ROM,'Select ROM')+makeDropDawn('color',fnd.colors,'Select Color')+'</div>';          
            str += '<button onclick="addToCart('+ind+',`'+fnd.name+'`)" class="btn btn-primary mb-2">Add to Cart</button>';
            str += '<br><button class="btn btn-secondary" onclick="editFn('+ind+')">Edit Mobile</button>';
            str += '</div>';
            document.getElementById('sts').innerHTML = str;
      }
    
    
      function addToCart(index,n){
        let ram = document.getElementById('ram').value;
        let rom = document.getElementById('rom').value;
        let color = document.getElementById('color').value;
        if(ram == '' || rom == '' || color== ''){
            alert("Choose all the options before adding to cart");
            return false;
        }
        let product = mobiles[index];
        let itm = {image:product.image, name:product.name, brand:product.brand, colors:color,RAM:ram,ROM:rom};
        let fn = carts.find((s)=>{
          return s.name == n;
        });
        if(fn){
            alert("Mobile Name has already been added to the cart")
            return false;
        } else{
          carts.push(itm);
        }
        alert("Successfully added to cart");
        addCart();
      }
    
      function remove(index){
      let ind = carts[index]; 
        carts.splice(ind,1);
        addCart();
      }
    
      function showCart(){
        let h = '<p>Number of items in cart : '+carts.length+'</p>';
        const arr = carts.map((pr,ind)=>{
          let {image,RAM,ROM,name,colors,brand} = pr;
          let str = '<div class="card col-12 mr-2">';
            str += '<div class="row" onclick="helo('+ind+')">';
            str += '<div class="col-2"></div>';
            str += '<div class="col-3">';
            str += '<img class="w-25" src="'+ image +'">';
            str += '</div>';  
            str += '<div class="col-7 text-center">';
              str += '<span>'+name+' from '+brand+'</span><br>';
              str += '<span>Color : '+colors+' RAM : '+RAM+' ROM : '+ROM+'</span><br>';
              str += '<button class="btn btn-danger" onclick="remove('+ind+')">Remove from Cart</button>'
              str += '</div>';
            str += '</div>';
            str += '</div>'; 
        return str;
    });
    return h+arr.join('');
      }
    
      function showForm(){
           let {name='',image='',brand='',ram=[],rom=[],color=[]} = myproduct;
                let title = editIndex >=0 ? 'Edit Mobile Details' : 'Add a New Product';
                let str = '<h3>'+title+'</h3>'; 
                str += '<span class="text-danger" id="st6"></span>';
                str += makeTextField('proName','Product Name','Enter Product Name',name);
                str += '<span class="text-danger" id="st"></span>';
                str += makeTextField('imgs','Product Image','Enter URL of Product Image',image);
                str += '<span class="text-danger" id="st5"></span>';
                str += makeDropDawn('brand',brands,'Select Brand',brand);
                const newArr3 = [...colors];
               if(editIndex >= 0){
                  let {RAM=[],ROM=[],colors=[]} = myproduct;
                  str += makeCheckbox(ramOptions,'s1','Choose RAM options',RAM)
                  str += '<span class="text-danger" id="st1"></span><br>';
                  str += makeCheckbox(romOptions,'s2','Choose ROM options',ROM); 
                  str += '<span class="text-danger" id="st2"></span><br>'; 
                  str += makeCheckbox(newArr3,'s3','Choose Colors options',colors); 
                  str += '<span class="text-danger" id="st4"></span><br>';
                } else{           
                  str += makeCheckbox(ramOptions,'s1','Choose RAM options',ram);
                  str += '<span class="text-danger" id="st1"></span><br>';
                  str += makeCheckbox(romOptions,'s2','Choose ROM options',rom);
                  str += '<span class="text-danger" id="st2"></span><br>'; 
                  str += makeCheckbox(colors,'s3','Choose Colors options',color);
                  str += '<span class="text-danger" id="st4"></span><br>';
                }
                str += '<br><button class="btn btn-primary" onclick="submitProduct()">Add product</button>';
                return str;
            }
        
            function makeTextField(id,label,placeholder='',value=''){
            let str = '<div class="form-group">';
            str += '<label>'+label+'</label>';
            str += '<input type="text" id="'+id+'" class="form-control" placeholder="'+placeholder+'" value="'+value+'">';
            str += '</div>';
            return str;
            }
    
            function makeRadios(arr, label, name,radioValue='') {
                    const arr1 = arr.map(opt => {
                        let checked = radioValue == opt ? 'checked' : '';
                        let str = '<div class="form-check form-check-inline">';
                        str += '<input class="form-check-input" type="radio" name="' + name + '" value="' + opt + '" '+checked+'>';
                        str += '<label class="form-check-label">' + opt + '</label>';
                        str += '</div>';
                        return str;
                    });
                    let s1 = '<div class="form-check form-check-inline">';
                    s1 += '<label class="form-check-label">'+label+'</label>';
                    s1 += '</div>';
                    s1 += arr1.join('');
                    return s1;
                }
    
                function makeDropDawn(id,options,header,selValue=''){
                    const arr1 = options.map(opt=>{
                        let selected = opt===selValue ? 'selected' : '';
                        return '<option '+selected+'>'+opt+'</option>';
                    });
                   let s1 = '<div class="form-group">';
                    s1 += '<select id="'+id+'" class="form-control">';
                    let selectedHeader = selValue ? '' : 'selected';
                    s1 += '<option value="" disabled '+selectedHeader+'>'+header+'</option>';
                    s1 += arr1.join('');
                    s1 += '</select>';      
                    s1 += '</div>';
                    return s1;
                }
    
                
     
                function makeCheckbox(arr,name,label,checked=[]){
                  let arr1 = arr.map((opt)=>{
                  let c1 = checked.includes(opt) ? 'checked' : '';
                  let str = '<div class="form-check">';
                    str += '<input type="checkbox" class="form-check-input" value="'+opt+'" name="'+name+'" '+c1+'>';
                    str += '<label class="form-check-label">' + opt + '</label>';    
                    str += '</div>';
                    return str;
                  });
                  
                  let s1 = '<div class="form-check form-check-inline">';
                   s1 += '<label class="form-check-label">'+label+'</label>';        
                   s1 += '</div>';
                   return s1+arr1.join('');
                }
    