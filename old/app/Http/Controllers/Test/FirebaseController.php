<?php

namespace App\Http\Controllers\Test;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FirebaseController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function saveToken(Request $request)
    {

        $user = User::find(1);
        $user->device_token = Str::random(20);
        $user->save();
        return response()->json(['success' => 'token saved']);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function sendNotification(Request $request)
    {
        if (strtolower($request->method()) == 'get') {
            return view('test.send');
        }
        $firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();

        // dd($firebaseToken);
        $SERVER_API_KEY = 'AAAArz-2oaA:APA91bF5OsmDDZ0W8shBs9gu_moay0LfFmZJr2SL5R44-Wg6OPgcf-dQToCWdtiZdV9DKzJN7I8erb0E8361xiBFj8nmf1SzaRG1x0F7w-4qBVNaHK99bwVvmnCRLq5i-1bI0DOXs7ZI';

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => 'hello from sakil',
                "body" => 'im using firebase notification channel',
            ]
        ];
        $dataString = json_encode($data);

        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);

        dd($response);
    }
}
