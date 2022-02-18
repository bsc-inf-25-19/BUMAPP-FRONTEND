<template>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <h3>Add category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Product name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Image URL</label>
                        <input type="text" class="form-control" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() { },

};

</script>
<style ></style>