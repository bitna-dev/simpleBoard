import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      title: '첫번째 글',
      content: '첫번째글 내용',
    },
    {
      id: 2,
      title: '두번째 글',
      content: '두번째글 내용',
    },
    {
      id: 3,
      title: '세번째 글',
      content: '세번째글 내용',
    },
    {
      id: 4,
      title: '네번째 글',
      content: '네번째글 내용',
    },
    {
      id: 5,
      title: '다섯번째 글',
      content: '다섯번째글 내용',
    },
  ];
  getNextId() {
    return this.boards.length + 1;
  }
  getAllPosts() {
    console.log(this.getNextId());

    return this.boards;
  }

  getPost(id: number) {
    return this.boards.filter((board) => board.id == id);
  }
  createPost(data) {
    const newBoard = {
      id: this.getNextId(),
      ...data,
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  updatePost(id: number, data) {
    const idx = this.getBoardId(id);
    if (idx > -1) {
      this.boards[idx] = {
        ...this.boards[idx],
        ...data,
      };
    }
    return this.boards[idx];
  }

  getBoardId(id: number) {
    return this.boards.filter((board) => board.id == id)[0].id;
  }
}
