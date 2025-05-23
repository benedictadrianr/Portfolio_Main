export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      code: {
        Row: {
          code_name: string
          created_at: string
          full_code: string
          id: number
        }
        Insert: {
          code_name?: string
          created_at?: string
          full_code?: string
          id?: number
        }
        Update: {
          code_name?: string
          created_at?: string
          full_code?: string
          id?: number
        }
        Relationships: []
      }
      company_project: {
        Row: {
          alt: string
          created_at: string
          id: number
          img: string
          link: string
          logo: string
          name: string
        }
        Insert: {
          alt?: string
          created_at?: string
          id?: number
          img?: string
          link?: string
          logo?: string
          name?: string
        }
        Update: {
          alt?: string
          created_at?: string
          id?: number
          img?: string
          link?: string
          logo?: string
          name?: string
        }
        Relationships: []
      }
      Experience: {
        Row: {
          companyName: string
          created_at: string
          description: string
          highlight: string
          highlight_point: string[]
          highlightImg: string
          id: number
          jobDesc: string
          jobType: Database["public"]["Enums"]["job-type"] | null
          learnt: string
          learnt_points: string[]
          learntImg: string
          overview: string
          overviewImg: string
          preview_bullet: string[]
          previewImg: string
          skills: string[]
          timeFinish: number | null
          timeStart: number
        }
        Insert: {
          companyName?: string
          created_at?: string
          description?: string
          highlight?: string
          highlight_point?: string[]
          highlightImg?: string
          id?: number
          jobDesc?: string
          jobType?: Database["public"]["Enums"]["job-type"] | null
          learnt?: string
          learnt_points?: string[]
          learntImg?: string
          overview?: string
          overviewImg?: string
          preview_bullet?: string[]
          previewImg?: string
          skills?: string[]
          timeFinish?: number | null
          timeStart?: number
        }
        Update: {
          companyName?: string
          created_at?: string
          description?: string
          highlight?: string
          highlight_point?: string[]
          highlightImg?: string
          id?: number
          jobDesc?: string
          jobType?: Database["public"]["Enums"]["job-type"] | null
          learnt?: string
          learnt_points?: string[]
          learntImg?: string
          overview?: string
          overviewImg?: string
          preview_bullet?: string[]
          previewImg?: string
          skills?: string[]
          timeFinish?: number | null
          timeStart?: number
        }
        Relationships: []
      }
      media: {
        Row: {
          created_at: string
          description: string | null
          id: number
          media_url: string
          title: string
          uploader: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          media_url: string
          title?: string
          uploader?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          media_url?: string
          title?: string
          uploader?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_uploader_fkey"
            columns: ["uploader"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          description: string | null
          full_name: string | null
          gender: Database["public"]["Enums"]["gender"] | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          description?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          description?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      Project: {
        Row: {
          alt: string
          created_at: string
          id: number
          img: string
          link: string
          logo: string
          name: string
        }
        Insert: {
          alt?: string
          created_at?: string
          id?: number
          img?: string
          link?: string
          logo?: string
          name?: string
        }
        Update: {
          alt?: string
          created_at?: string
          id?: number
          img?: string
          link?: string
          logo?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "male" | "female" | "other"
      "job-type": "Full Time" | "Part Time" | "Internship" | "Contract"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
