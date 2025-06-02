<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Показывает форму регистрации
    public function showRegister()
    {
        return view('auth.register');
    }

    // Показывает форму входа
    public function showLogin()
    {
        return view('auth.login');
    }

    // Обработка формы регистрации
    public function register(Request $request)
    {
        // Валидация
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
            'role' => 'required|in:admin,employee,user',
        ]);


        // Создание пользователя
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);


        // Авторизация
        Auth::login($user);

        return redirect()->route('listing.index');
    }

    // Обработка формы входа
    public function login(Request $request)
    {
        // Валидация
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Попытка входа
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended(route('listing.index'));
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    // Выход из системы
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
