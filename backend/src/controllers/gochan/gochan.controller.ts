import { Controller, Get, Query } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { JSDOM } from 'jsdom';

@Controller('gochan')
export class GochanController {
  constructor(private readonly httpService: HttpService) {}

  @Get('crawl')
  async getCrawl(
    @Query()
    query: {
      url: string;
    },
  ) {
    const response = await this.httpService.axiosRef.get(query.url, {
      responseType: 'arraybuffer',
      responseEncoding: 'binary',
    });

    const dom = new JSDOM(response.data);

    const $thread = dom.window.document.querySelector('#thread');
    const title = $thread.querySelector('#threadtitle').textContent.trim();

    const $posts = $thread.querySelectorAll('article.post');
    const posts = Array.from($posts).map(($post) => {
      const $postHeader = $post.querySelector('.post-header');

      const postId = global.parseInt(
        $postHeader.querySelector('.postid').textContent,
      );
      const userId = $postHeader
        .querySelector('.uid')
        .textContent.trim()
        .slice(3);
      const userName = $postHeader
        .querySelector('.postusername')
        .textContent.trim();
      const content = $post.querySelector('.post-content').textContent.trim();
      const postedAt = $postHeader.querySelector('.date').textContent.trim();

      return {
        postId,
        userId,
        userName,
        content,
        postedAt,
      };
    });

    return {
      title,
      posts,
    };
  }
}
