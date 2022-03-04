var eventSubmit = new Vue()

Vue.component("options-tab", {
	template: 
  `<div>
  	<!-- v-for v-bind Class & Style Binding v-on-->
  	<span v-for="(optionslist, index)  in options" v-bind:style="styleOptions"
    	:key="index" v-on:click="clickTab(optionslist)" 
      :class="{selected: optionslist == tabSelected}">
    	{{optionslist}}
    </span>
    <!-- v-if v-else-->
    <form-film v-if="tabSelected == 'Añadir reseñas'"></form-film>
    <div v-else>    	
    	<list-review :reviews="reviews" v-if="reviews.length"></list-review>
      <p v-else>No hay reseñas!</p>
    </div>
   </div>
  `,
  data() {
  	return {
    	styleOptions: {
      	fontSize: "18px",
        marginRight: "25px"
      },
      options: ["Añadir reseñas", "Mirar todas las reseñas"],
      tabSelected: "Añadir reseñas",
      reviews: []
    }
  },
  methods: {
  	clickTab(optionslist){
    	this.tabSelected = optionslist;
    }
  },
  mounted() {
  	eventSubmit.$on("add-review",filmReview => {
    	this.reviews.push(filmReview);
    })
  }
	
})

Vue.component("list-review", {
	props: {
  	reviews: {
    type:[Array],
    require: true
    }
  },
  template:
  `
  <div>
  	<div v-for="reviewsList in reviews" class="divReview">    	
    	<p style="fontWeight:bold">{{reviewsList.film}}</p>
      <p>Nombre: {{reviewsList.name}}</p>
      <p>Año: {{reviewsList.year}}</p>
      <div class="divRating">
      	<div>
        	<p style="marginTop: 0px">Rating:</p>
        </div>
        <div style="marginLeft: 20px">
        	<stars :n="reviewsList.rating"></stars>
        </div>
        
      </div>
      Opinion:<br>
      {{reviewsList.opinion}}
    </div>
</div>
  `
})

Vue.component("form-film", {
	template: 
  `
  <div class="form">
  <form @submit.prevent="submitReview">
  <div v-if="errors.length" style="marginBottom: 40px">
  	<div style="color:red; marginBottom:20px"v-for="errorsList in errors" >
    <i class="fa fa-exclamation-triangle"></i>{{errorsList}}</div>
   </div>
  	<div style="marginBottom: 40px">
      <label for="inputName">Nombre</label>
      <input style="marginLeft:25px" 
      v-model="name" id="inputName" class="input" type="text"/>
    </div>
    <div style="marginBottom: 40px">
      <label for="inputPelicula">Pelicula</label>
      <input style="marginLeft:25px" 
      v-model="film" id="inputPelicula" class="input" type="text" />
    </div>
    <div style="marginBottom: 40px">
      <label for="inputYear">Año</label>
      <input style="marginLeft:50px" 
      v-model="year" id="inputYear" class="input" type="number" 
      min="1888" max="2022" />
    </div>
    <div style="marginBottom: 40px" class="divRating">
    	<label>Rating</label>
      <input style="marginLeft:35px; width:40px" 
      type="number" v-model="rating" min="0" max="5"></input>
      <div style="marginLeft: 20px" class="divStars">
      	<stars :n="rating"></stars>
        
      </div>
    </div>
    <div style="marginBottom: 40px" class="divOpinion">
    	<div>
      	<label for="textAreaOpinion">Opinion</label>
      </div>
      <div>
      	<textarea v-model="opinion" id="textAreaOpinion"  />
      </div>
      
    </div>
    
    <div class="divSubmit" >    
        <input id="btnSubmit"type="submit" value="Enviar">
    </div>
  	
  </form>
  </div>
  `,
  data() {
  	return {
    	name: null,
      film: null,
      year: 2000,
      rating: 0,
      opinion: null,
      errors: []
    }
  },
  methods: {
  	submitReview() {
    	if(this.name == null || this.film == null || this.opinion == null) {
      	let errors = [];
        if(this.name == null) {
        	errors.push("Introduzca un nombre!");
        }
        if(this.film == null) {
        	errors.push("Introduzca una película!");
        }
        if(this.opinion == null) {
        	errors.push("Introduzca una opinion!");
        }
        this.errors = errors;
      }
      else {
      	let filmReview = {
        	name: this.name,
          film: this.film,
          year: this.year,
          rating: this.rating,
          opinion: this.opinion
      	};
        eventSubmit.$emit("add-review",filmReview);
      
      	this.errors = [];
      }
      this.name = null;
      this.film = null;
      this.year = 2000;
      this.rating = 0;
      this.opinion = null;
    }
  }


})

//props

Vue.component("stars", {
	props: {
  	n: {
    	type:[Number, String],
    	require:true
    }
  },
  template: 
  `
  <div>
  	<div v-if="n == 0" >
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
     </div>
     <div v-else-if="n == 1" >
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
     </div>
     <div v-else-if="n == 2" >
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
     </div>
     <div v-else-if="n == 3" >
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
     </div>
     <div v-else-if="n == 4" >
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-disabled"></i>
     </div>
     <div v-else>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
        <i class="fa fa-solid fa-star fa-active"></i>
     </div>
  </div>
  
  `

})



let app = new Vue({
	el:"#app",
  data: {  	
    typePage: "Reseñas",
    itemPage: "Películas"
  },
  computed: {
  	title() {
    	return this.typePage + " de " + this.itemPage;
    }
  }

})