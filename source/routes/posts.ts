/** source/routes/posts.ts */

import { Router, Request, Response } from "express";
import controller from '../controllers/posts';

const router = Router();

router.get('/', controller.getPosts);
router.get('/:id', controller.getPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);
router.post('/', controller.addPost);

export = router;