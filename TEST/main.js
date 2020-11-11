$(document).ready(function(){

  // Function to dynamicaly change the address text
  $('.adress').keyup(function(e) {
    e.preventDefault()
  $(this)[0].innerHTML = e.target.value
      console.log($(this)[0].innerHTML)
});

  // Function to get the data of the address, the lat/lng and return
  // them as an alert
  $(".geoloc").click(function(e){
    e.preventDefault();
    var location = $(this).siblings('textarea')[0].innerHTML;
    console.log(location)
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:location,
        key:'AIzaSyBb7O66UDx5fi2QC7-rwIH6MWRe5HxurzI'
      }
    })
    .then(function(response){

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;

        alert(`Coodinates: Latitude = ${lat} ; Longitude = ${lng} `)
    })
    .catch(function(error){
      alert(`The address "${location}" does not exist`);
    });
  })

  // Function to delete a card after pressing the bin icon
  $(".delete").click(function(){
        $(this).closest('.card').remove()
  });

  // Function to edit a card after pressing the pen icon
  $('.edit').on('click', function(){
  	var $form = $(this).siblings('form');
  	$form.toggleClass('is-readonly is-editing');
    var isReadonly  = $form.hasClass('is-readonly');
    $form.find('input,textarea').prop('disabled', isReadonly);
  });

  // Function to create an new and empty card
  $('.add').on('click', function() {

    var div = document.createElement("DIV")
    var image = document.createElement("DIV")
    var p = document.createElement("P")
    var form = document.createElement("FORM")

    var divName = document.createElement("DIV")
    var divAdd = document.createElement("DIV")
    var divComp = document.createElement("DIV")
    var divAdress = document.createElement("DIV")
    var divComp = document.createElement("DIV")
    var divPhone = document.createElement("DIV")
    var divEdit = document.createElement("DIV")
    var divDel = document.createElement("DIV")

    var img = document.createElement("IMG")
    var imgLoc = document.createElement("IMG")
    var imgEdit = document.createElement("IMG")
    var imgDelete = document.createElement("IMG")

    var inputName = document.createElement("INPUT")
    var inputAdd = document.createElement("INPUT")
    var labelLoc = document.createElement("LABEL")
    var labelPhone = document.createElement("LABEL")
    var inputComp = document.createElement("INPUT")
    var inputAdress = document.createElement("TEXTAREA")
    var inputPhone = document.createElement("INPUT")
    var edit = document.createElement("BUTTON")
    var del = document.createElement("BUTTON")
    var coordinate = document.createElement("BUTTON")
    var test = document.createElement("BUTTON")
    var linebreak = document.createElement("br")

    // Function to dynamicaly change the address text for the new cards
    inputAdress.addEventListener("keyup",function(e) {
      e.preventDefault()
    $(this)[0].innerHTML = e.target.value
        console.log($(this)[0].innerHTML)
  });

  // Function to remove for the new cards
  del.addEventListener("click",function(){
        $(this).closest('.card').remove()
  });

  // Function to edit for the new cards
  edit.addEventListener('click', function(){
  	if(inputName.disabled == true){
      inputName.disabled = false
      inputAdd.disabled = false
      inputComp.disabled = false
      inputAdress.disabled = false
      inputPhone.disabled = false
    }else{
      inputName.disabled = true
      inputAdd.disabled = true
      inputComp.disabled = true
      inputAdress.disabled = true
      inputPhone.disabled = true
    }
  });

  // Google API call for the new cards
  coordinate.addEventListener("click",function(e){
    e.preventDefault();
    var location = $(this).siblings('textarea')[0].innerHTML;
    console.log(location)
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:location,
        key:'AIzaSyBb7O66UDx5fi2QC7-rwIH6MWRe5HxurzI'
      }
    })
    .then(function(response){
    console.log(response)
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;

        alert(`Coodinates: Latitude = ${lat} ; Longitude = ${lng} `)
    })
    .catch(function(error){
      alert(`The address "${location}" does not exist`);
    });
  })

    // Array to get a random photo for each new cards
    var profile = ["alex jonathan", "janeth carton", "john-smith", "michael zimber", "monica smith", "sandra smith"]

    img.src=`images/${profile[Math.floor(Math.random() * 5)]}.jpg`
    imgLoc.src="images/location.png"
    imgEdit.src="images/edit.png"
    imgDelete.src="images/delete.png"

    inputName.placeholder = "Name"
    inputAdd.placeholder = "Address"
    inputComp.placeholder = "Company"
    inputAdress.placeholder = "Adress"
    inputPhone.placeholder = "Phone"

    inputName.disabled = false
    inputAdd.disabled = false
    inputComp.disabled = false
    inputAdress.disabled = false
    inputPhone.disabled = false

    labelPhone.innerHTML = "P:"
    p.innerHTML= "Graphics designer"
    coordinate.innerHTML= "Coordinates"
    coordinate.classList.add("geoloc")
    p.style.fontWeight= 'bold'
    image.classList.add("image")
    form.classList.add("is-readonly")
    form.style.display = "grid"
    form.style.height = "100%"
    div.classList.add("card")
    inputName.classList.add("h1")
    inputComp.classList.add("h2")
    inputAdress.classList.add("adress")
    divEdit.classList.add("edit")
    divDel.classList.add("delete")
    inputPhone.oninput = function(){this.value = this.value.replace(/[^0-9.(\)\-+]/g, '')}

    edit.appendChild(imgEdit)
    del.appendChild(imgDelete)

    image.appendChild(img)
    image.appendChild(p)

    divName.appendChild(inputName)
    divAdd.appendChild(imgLoc)
    divAdd.appendChild(inputAdd)
    divComp.appendChild(inputComp)
    divAdress.appendChild(inputAdress)
    divAdress.appendChild(coordinate)
    divPhone.appendChild(labelPhone)
    divPhone.appendChild(inputPhone)

    form.appendChild(divName)
    form.appendChild(divAdd)
    form.appendChild(divComp)
    form.appendChild(divAdress)
    form.appendChild(divPhone)

    divEdit.appendChild(edit)
    divDel.appendChild(del)

    div.appendChild(image)
    div.appendChild(form)
    div.appendChild(divEdit)
    div.appendChild(divDel)
    div.appendChild(test)

    $('.add').before(div)
  });


});
