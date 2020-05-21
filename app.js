
 
axios.get('https://test-schema.herokuapp.com/vegetables')
  .then(function (response) {  
    data = response.data.data; 
    //console.log(data);
    

    let total = data.reduce( (total, item) =>  total += item.price, 0 ); 
    console.log("Total: "+ total);


    const vat15 = data.map(item => item.price + parseFloat(item.price) * .15 );
    console.log("Apply 15% Vat to All Price" );
    console.log(vat15);
    
    const morethan50 = data.filter(item => parseInt(item.price) > 50  == 1);
    console.log("Filter which price are more than 50" );
    console.log(morethan50); 

  })



