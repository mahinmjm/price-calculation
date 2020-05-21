
 
axios.get('https://test-schema.herokuapp.com/vegetables')
  .then(function (response) {  
    data = response.data.data; 
    console.log(data);
    

    let total = data.reduce( (total, item) =>  total += item.price, 0 ); 
    console.log(total);


    const vat15 = data.map(item => item.price + parseFloat(item.price) * .15 );

    console.log(vat15);
    
    const morethan50 = data.filter(item => parseInt(item.price) > 50  == 1);
    console.log(morethan50); 

  })



