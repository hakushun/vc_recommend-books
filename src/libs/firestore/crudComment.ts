import {
  CreatePayload,
  RemovePayload,
  UpdatePayload,
} from '../../redux/modules/comment';
import { mapComment } from '../utils/mapComment';
import { mapUpdateComment } from '../utils/mapUpdateComment';
import { getInstance } from './getInstance';

const db = getInstance();

export const createComment = async ({
  bookId,
  content,
  author,
}: CreatePayload): Promise<void> => {
  const id = await db
    .collection('books')
    .doc(bookId)
    .collection('comments')
    .doc().id;
  const comment = mapComment({ id, content, author });
  await db
    .collection('books')
    .doc(bookId)
    .collection('comments')
    .doc(id)
    .set(comment);
};

export const updateComment = async ({
  bookId,
  item,
}: UpdatePayload): Promise<void> => {
  const comment = mapUpdateComment(item);
  await db
    .collection('books')
    .doc(bookId)
    .collection('comments')
    .doc(item.id)
    .set(comment, { merge: true });
};

export const removeComment = async ({
  id,
  bookId,
}: RemovePayload): Promise<void> => {
  await db
    .collection('books')
    .doc(bookId)
    .collection('comments')
    .doc(id)
    .delete();
};
