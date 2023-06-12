---
sidebar_position: 3
---

# Adding Games to Crackpipe

If you wish to add games to your server but are struggling with unorganized files, varying file formats, and compressed files, you have come to the right place. In this chapter, you will learn the correct process to add games to your Crackpipe server.

## Before You Begin

Please read the [File and Folder Structure](structure.md) chapter first.

Adding games to your server is a manual process that demands effort and expertise. However, it is worth the effort. To execute the task accurately, follow the steps outlined below for each game. With practice, you will become more proficient and adept at performing these steps with ease.

## Step 1: Preparing

Suppose you have obtained a DRM-free copy of "Crawl," and it is located in your file system as follows:

- Crawl/
  - setup.bin
  - setup.exe

> This is not a real-world example.

If the game files are already compressed in a format that Crackpipe can understand, such as "Crawl.zip", you can skip the next step. However, if you want to maximize disk space and repack the files, you can do that. Datahoarders, for example, rely on every bit and byte on their disks and tend to repack everything to the maximum compression available.

## Step 2: Compression

To make your game files compatible with Crackpipe, you need to compress them. We recommend using [7Zip](https://www.7-zip.org/) for this. There are different approaches to this.

### Method 1: The Fast Way

The fastest way to compress your game files into a .7z archive is by copying them without compression, which takes little to no time or effort. However, the resulting archive will be as large as the original folder.

```bash
7z a -mx=0 -ms=off game.7z /path/to/game/folder/Crawl/*
```

This command uses the following options:

- `a`: Add files to the archive
- `-mx=0`: Sets the compression level to 0
- `-ms=off`: Turns off solid block compression

### Method 2: The Hardcore Way

To achieve the smallest possible archive size, use the maximum settings of 7zip. The resulting archive may or may not be much smaller than before, but it will definitely be as small as possible. However, this process could take a long time, depending on your hardware, and is very resource-intensive.

```bash
7z a -mx=9 -mfb=64 -md=32m -ms=on game.7z /path/to/game/folder/Crawl/*
```

This command uses the following options:

- `a`: Add files to the archive
- `-mx=9`: Use the maximum compression level
- `-mfb=64`: Set the number of fast bytes to 64
- `-md=32m`: Set the dictionary size to 32MB
- `-ms=on`: Enable solid block compression

### Method 3: The Balanced Way

If you are not happy with either method, you can use the preselected options of 7zip to compress the files as effectively and balanced as possible:

```bash
7z a game.7z /path/to/game/folder/Crawl/*
```

Apologies for the confusion. Here's an improved version of Step 3:

## Step 3: Naming the Archive

Before you name the archive, do a quick research about the game you have by asking yourself or using a search engine to find out the following information:

- "What version is the game?"
- "When was the game released?"
- "Is the game still in early access?"

Once you have the necessary information, you can name the archive using the [Crackpipe Naming Structure](structure.md). 

In our Example we have a copy of Crawl Version 1.0.1 released in 2014, so we named the archive:

```bash
Crawl (v1.0.1) (2014).7z
```

## Step 4: Deploy 🥳

Once you have named the archive, place it into the folder on your host system that is mounted to Crackpipe's `/files` folder. Once the archive is in place, Crackpipe will automatically index the game, enrich it with metadata, and save it in your database.

Congratulations! You have successfully added a game to your Crackpipe server. Repeat the process for any additional games you want to add.