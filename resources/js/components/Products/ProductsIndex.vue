<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createProduct'}" class="btn btn-success">Create new product</router-link>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Products list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th width="100"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product, index in products">
                            <td>{{ product.name }}</td>
                            <td> <img v-bind:src="'images/' + product.image"
                             alt="product" width="200" height="200"> </td>
                            <td>{{ product.description }}</td>
                            <td>
                                <router-link :to="{name: 'editProduct', params: {id: product.id}}" class="btn btn-xs btn-info">Edit</router-link>
                                <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(product.id, index)">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            products: []
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/products")
            .then(function(resp) {
                app.products = resp.data;
            })
            .catch(function(resp) {
                (resp);
                alert("Could not load products");
            });
    },
    methods: {
        deleteEntry(id, index) {
            if (confirm("Do you really want to delete it?")) {
                var app = this;
                axios
                    .delete("/api/v1/products/" + id)
                    .then(function(resp) {
                        app.products.splice(index, 1);
                    })
                    .catch(function(resp) {
                        alert("Could not delete product");
                    });
            }
        }
    }
};
</script>
