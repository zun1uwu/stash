#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;

fn startup() {
    let base_dir = &tauri::api::path::home_dir()
        .expect("Failed to get the users home directory")
        .join(".stash");

    let db_dir = base_dir.join("storage");

    if !base_dir.exists() {
        fs::create_dir_all(&base_dir).expect("Failed to create the base directory");
    }

    if !db_dir.exists() {
        fs::create_dir_all(&db_dir).expect("Failed to create the base directory");
    }

    let names: Vec<String> = vec![
        String::from("Text"),
        String::from("Files"),
        String::from("Passwords"),
        String::from("Images"),
        String::from("Videos"),
        String::from("Music"),
        String::from("Cards"),
    ];

    for name in names {
        let path = db_dir.join(format!("{}.json", name.to_lowercase()));

        if !path.exists() {
            fs::File::create(&path).expect(&format!("Failed to create file: {}", &path.display()));
        }
    }
}

fn main() {
    startup();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
