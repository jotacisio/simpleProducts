@extends('layouts.app')

@section('content')
<div class="container">
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="text-center h1 m-b-md">
                Current Products
            </div>
            <router-view name="productsWelcome"></router-view>
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
