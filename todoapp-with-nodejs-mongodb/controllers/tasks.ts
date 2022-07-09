import { readSync } from "fs";

const Task = require("../models/Task");

const getAllTasks = async (req:any,res:any) => {
     try {
       // 全件検索の場合は{}を指定する。
  const allTask = await Task.find({});
   res.status(200).json(allTask);
  }catch(err){
    res.status(500).json(err);
  }
}

const createTask = async (req:any,res:any) => {
  try {
    // awaitはasyncの中でしか有効にならない
  const createTask = await Task.create(req.body);
   res.status(200).json(createTask);
  }catch(err){
    res.status(500).json(err);
  }
};

const getSingleTask = (req:any,res:any) => {
  res.send("ある特定のタスクを取得しました。");
}

const updateTask = (req:any,res:any) => {
  res.send("ある特定のタスクを更新しました。");
}

const deleteTask = (req:any,res:any) => {
 res.send("ある特定のタスクを削除しました。");
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};