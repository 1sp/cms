@extends('layouts.main')

@section('content')
<div class="col-md-3">
	<div class = "sidebar-nav">
		@include('shared.sidebar')
		@if(Auth::user())
		<div class="well">
			Create New Page <br>
			<a class="btn btn-success" href="/pages/create">Create</a>
		</div>
		@endif
    </div>
</div>
<div class="col-md-9 column content">
    <table class="table table-hover table-striped table-condensed">
        <thead>
        <tr>
            <th>Title</th>
            <th>Edit</th>
        </tr>
        </thead>
        <tbody>
            @foreach($pages as $page)
                <tr>
                    <td><a href="{{$page->slug}}">{{{$page->title}}}</a></td>
                    <td><a id="page-id-{{$page->id}}" href="/pages/{{$page->id}}/edit">edit</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
@stop