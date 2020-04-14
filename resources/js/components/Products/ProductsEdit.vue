<template>
  <div>

    <div class="panel panel-default">
      <div class="panel-heading">Edit product</div>
      <div class="panel-body">
        <form v-on:submit.prevent="saveForm()" enctype="multipart/form-data">
        <div class="container align-center">
            <div class="row">
                <div class="col-xs-12 form-group">
                <label class="control-label">Product name</label>
                <input type="text" v-model="product.name" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <label class="control-label">Product image</label>
                    <img v-bind:src="'images/' + product.image"
                                alt="product" width="200" height="200">
                    <input type="file" v-on:change="onImageChange" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                <label class="control-label">Product description</label>
                <textarea type="text" v-model="product.description" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group mr-1">
                    <button class="btn btn-success">Update</button>
                </div>
                <div class="form-group">
                    <router-link to="/" class="btn btn-primary">Back</router-link>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let app = this;
    let id = app.$route.params.id;
    app.productId = id;
    axios
      .get("/api/v1/products/" + id)
      .then(function(resp) {
        app.product = resp.data;
      })
      .catch(function() {
        alert("Could not load your product");
      });
  },
  data: function() {
    return {
      productId: null,
      product: {
        name: '',
        image: '',
        description: ''
      }
    };
  },
  methods: {
    onImageChange(e){
            this.image = e.target.files[0];
        },
    saveForm() {
      var app = this;
      var newProduct = app.product;
      newProduct.image = this.image;
      axios
        .patch("/api/v1/products/" + app.productId, newProduct)
        .then(function(resp) {
          app.$router.replace("/");
        })
        .catch(function(resp) {
          (resp);
          alert("Could not create your product");
        });
    }
  }
};
</script>
