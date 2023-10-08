package com.bezkoder.springjwt.srevice;

import java.util.*;

import java.util.*;

class Solution {
    public int[] maxGeneticDifference(int[] parents, int[][] queries) {
        int n = parents.length;
        int root = -1; // The root node value is -1.
        Map<Integer, List<Integer>> graph = new HashMap<>();

        for (int i = 0; i < n; i++) {
            if (parents[i] == -1) {
                root = i; // Identify the root node.
            } else {
                graph.computeIfAbsent(parents[i], x -> new ArrayList<>()).add(i);
            }
        }

        TrieNode trie = new TrieNode();
        Map<Integer, List<int[]>> queriesMap = new HashMap<>();

        for (int i = 0; i < queries.length; i++) {
            queriesMap.computeIfAbsent(queries[i][0], x -> new ArrayList<>()).add(new int[]{queries[i][1], i});
        }

        int[] result = new int[queries.length];
        dfs(graph, trie, queriesMap, root, result);

        return result;

    }

    private void dfs(Map<Integer, List<Integer>> graph, TrieNode trie, Map<Integer, List<int[]>> queriesMap, int node, int[] result) {
        trie.insert(node, 0);

        if (queriesMap.containsKey(node)) {
            for (int[] query : queriesMap.get(node)) {
                result[query[1]] = trie.query(query[0], 0);
            }
        }

        if (graph.containsKey(node)) {
            for (int child : graph.get(node)) {
                dfs(graph, trie, queriesMap, child, result);
            }
        }

        trie.delete(node, 0);

    }

    class TrieNode {
        TrieNode[] children = new TrieNode[2];

        public void insert(int num, int depth) {
            TrieNode node = this;

            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;

                if (node.children[bit] == null) {
                    node.children[bit] = new TrieNode();
                }

                node = node.children[bit];
            }
        }

        public int query(int num, int val) {
            TrieNode node = this;
            int result = 0;

            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                int oppositeBit = 1 - bit;

                if (node.children[oppositeBit] != null) {
                    result |= (1 << i);
                    node = node.children[oppositeBit];
                } else {
                    node = node.children[bit];
                }
            }

            return result ^ val;
        }

        public void delete(int num, int depth) {
            delete(this, num, 31);
        }

        private boolean delete(TrieNode node, int num, int depth) {
            if (node == null) {
                return false;
            }

            if (depth == -1) {
                return true; // Successfully reached the end of the number's bits.
            }

            int bit = (num >> depth) & 1;
            boolean canDelete = delete(node.children[bit], num, depth - 1);

            if (canDelete && node.children[bit] != null) {
                node.children[bit] = null;
            }

            return node.children[1 - bit] == null && node.children[bit] == null;
        }

    }
}