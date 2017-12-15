<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

/**
 * Class PostController
 * @package App\Http\Controllers
 */
class PostController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return Post::paginate(7);
    }

    /**
     * @param Post $post
     * @return Post
     */
    public function show(Post $post)
    {
        return $post;
    }
}
