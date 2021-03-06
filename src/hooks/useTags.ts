import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update, UpdatePayload } from '../redux/modules/book';
import {
  add,
  remove,
  select,
  selectIsEditable,
  selectPopularTags,
  selectSelectedTags,
  selectTags,
  Tag,
  toggle,
} from '../redux/modules/tags';

type CustomHooks = () => {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  tags: Tag[];
  isEditable: boolean;
  selectedTag: string | null;
  popularTags: string[];
  handleKeyDown: (_e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemove: (_id: string) => void;
  handleToggle: (_boolean: boolean) => void;
  handleUpdate: (_: UpdatePayload) => void;
  handleSelect: (_id: string) => void;
};
export const useTags: CustomHooks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const tags = useSelector(selectTags);
  const isEditable = useSelector(selectIsEditable);
  const selectedTag = useSelector(selectSelectedTags);
  const popularTags = useSelector(selectPopularTags);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // refがfalthyであればreturn
    if (!inputRef.current) return;

    const { value } = inputRef.current;

    switch (e.key) {
      case 'Enter':
        // 空文字であればreturn
        if (!value.trim()) return;
        // すでに登録済みであればreturn
        if (tags.find((tag) => tag.value.toLowerCase() === value.toLowerCase()))
          return;
        // ５つ登録されていたらreturn
        if (tags.length >= 5) return;
        dispatch(add(value));
        inputRef.current.value = '';
        break;
      default:
        break;
    }
  };

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  const handleToggle = (boolean: boolean) => {
    dispatch(toggle(boolean));
  };

  // eslint-disable-next-line no-shadow
  const handleUpdate = async ({ item, tags }: UpdatePayload) => {
    await dispatch(update({ item, tags }));
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleSelect = (id: string) => {
    dispatch(select(id));
  };

  const handleRouteChange = () => {
    dispatch(toggle(false));
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    inputRef,
    tags,
    isEditable,
    selectedTag,
    popularTags,
    handleKeyDown,
    handleRemove,
    handleToggle,
    handleUpdate,
    handleSelect,
  };
};
