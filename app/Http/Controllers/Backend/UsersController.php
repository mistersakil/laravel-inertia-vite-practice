<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use function PHPSTORM_META\map;

class UsersController extends Controller
{
    private $data = [];

    public function __construct()
    {
        $this->data['listLink'] = route('admin.users.index');
        $this->data['createLink'] = route('admin.users.create');
        $this->data['routes'] = [
            'index' => route('admin.users.index'),
            'create' => route('admin.users.create'),
            'store' => route('admin.users.store'),
        ];
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response view
     */
    public function index()
    {
        $users = User::latest()->get();
        $this->data['users'] = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'view' => route('admin.users.show', encrypt($user))
            ];
        });



        return inertia('Backend/Users/Index', $this->data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return inertia('Backend/Users/Create', $this->data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $formData = $request->all();
        try {
            foreach ($formData as $user) {
                User::create($user);
            };
            response()->json(['success' => false, 'code' => 400, 'message' => 'Successful']);
        } catch (\Throwable $th) {
            response()->json(['success' => false, 'code' => 400, 'message' => $th->getMessage()]);
        }


        // User::create(
        //     Request::validate([
        //         'name' => ['required', 'max:50'],
        //         'email' => ['required', 'max:50'],
        //         'password' => ['required', 'max:50', 'email'],
        //     ])
        // );

        // return redirect()->route('admin.users.index');
        // return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}