<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Create new product</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()" enctype="multipart/form-data">
                    <div class="container align-center">
                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label">Product name</label>
                                <input type="text" v-model="product.name" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label">Product image</label>
                                <input type="file" v-on:change="onImageChange" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label">Product description</label>
                                <input type="text" v-model="product.description" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <button class="btn btn-success">Create</button>
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
        data: function () {
            return {
                product: {
                    name: '',
                    description: '',
                }
            }
        },
        methods: {
             onImageChange(e){
                this.image = e.target.files[0];
            },
            saveForm() {
                event.preventDefault();
                var app = this;
                var newProduct = app.product;

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

                let formData = new FormData();
                formData.append('name', newProduct.name);
                formData.append('image', this.image);
                formData.append('description', newProduct.description);

                axios.post('/api/v1/products',formData, config)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        (resp);
                        alert("Could not create your product");
                    });
            }
        }
    }
</script>
