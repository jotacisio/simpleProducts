<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product, index in products">
                            <td>{{ product.name }}</td>
                            <td> <img v-bind:src="'images/' + product.image"
                             alt="product" width="200" height="200"> </td>
                            <td>{{ product.description }}</td>
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
    }
};
</script>
