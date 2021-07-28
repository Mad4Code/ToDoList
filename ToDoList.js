alert("connected!");
var item = $(".list");
var addthis = item.html();
var addBtn = $("#add");
var inputUser;
var input = $("#input");
var additem = $("#divinput");
var enter;
addBtn.on("click",function(){
	additem.toggleClass("addBtn");
});

input.keypress(function(event){
	inputUser = '<div class="body">' + '\t' + input.val(); + '</div>';
	if(event.which === 13){
		console.log(inputUser);
		 input.val("");
		  // additem.toggleClass("addBtn");
		  item.append(inputUser);
		  inputUser = "";
	}
});