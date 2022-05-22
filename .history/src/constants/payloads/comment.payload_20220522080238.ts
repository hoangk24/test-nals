interface GetCommentPayload {
  blog_id: number | string
  cursor_id: number | string
  sort_direction: 'asc' | 'desc'
  offset: number
}

export type { GetCommentPayload }
