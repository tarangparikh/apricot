package com.apricot.core.random;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.user.User;
import com.google.gson.Gson;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

public class RandomGenerator {
    private static Gson gson = new Gson();
    public static ArrayList<Character> prepareNewCharacterSet(int[]...ranges){
        ArrayList<Character> characters = new ArrayList<>();
        for(int[] r : ranges){
            for(int i = r[0];i<=r[1];i++){
                characters.add((char)i);
            }
        }
        return characters;
    }
    public static ArrayList<Character> passwordSet = prepareNewCharacterSet(new int[]{'a','z'},new int[]{'A','Z'});
    public static String randomString(int min,int limit,ArrayList<Character> characters){
        StringBuilder sb = new StringBuilder();
        int len = min + new Random().nextInt(limit - min);
        for(int i = 0,size = characters.size();i<len;i++){
            sb.append(characters.get((new Random().nextInt(size))));
        }
        return sb.toString();
    }
    public static String randomEmail(){
        int namemin = 5;
        int namelimit = 15;
        int extentionlimit = 7;
        int extentionmin = 4;

        StringBuilder sb = new StringBuilder();
        sb.append(randomString(namemin,namelimit,passwordSet));
        sb.append("@");
        sb.append(randomString(extentionmin,extentionlimit,passwordSet));
        sb.append(".com");
        return sb.toString();
    }
    public static String randomPassWord(){
        return randomString(8,16,passwordSet);
    }
    public static User randomUser(){
        User send = new User();
        send.setEmail(randomEmail());
        send.setPassWord(randomPassWord());
        return send;
    }
    public static void wirte(String path,ArrayList<?> objects){
        File file = new File(path);
        try {
            FileWriter fileWriter = new FileWriter(file);
            fileWriter.write(gson.toJson(objects));
            fileWriter.flush();
            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
